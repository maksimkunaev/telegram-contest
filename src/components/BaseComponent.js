export default class Component {
    constructor(props, children) {
        this.props = props;
        this.children = children;
    }

    createComponent({ tag, attributes = [], onInput, onClick}, nestedComponents) {

        const parentComponent = document.createElement(tag);
        for (let key in attributes) {

            if (key === 'innerText') {
                parentComponent.innerText = attributes[key];
            }
            parentComponent.setAttribute([key], attributes[key])
        }
        const childrenComponents = this.createChildren(nestedComponents);

        childrenComponents.forEach(children => {
            parentComponent.appendChild(children)
        });
        if (onInput) {
            parentComponent.addEventListener('input', onInput)
        }

        if (onClick) {
            parentComponent.addEventListener('click', onClick)
        }
        return parentComponent;
    }

    createChildren(nestedComponents = [], grandChildren) {

        return nestedComponents.map(children =>{

            if (children.render) {
                return children.render();
            }

            if (typeof children === 'function') {
                return children.render();
            }

            if (typeof children === 'string') {
                return document.createTextNode(children);
            }

            // console.log('children', children)
            // console.log('', children.render)
            // console.log('typeof  children', typeof  children)
            // console.log('\n')
            //
            return children;
        } );
    }

    render() {
        return this.createComponent()
    }
}

export function render(app, root) {
    root.innerHTML = null;
    root.appendChild(app.render());
}
