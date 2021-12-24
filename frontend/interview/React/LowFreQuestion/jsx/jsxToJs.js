//  Babel插件如何实现JSX到JS的编译?
// Babel => AST => extensions => react.createElement
module.exports = (babel) => {
    let t = babel.type;
    return {
        name: "custom-jsx-plugin",
        visitor: {
            JSXElement(path) {
                let openingElement = path.node.openingElement;
                let tagName = openingElement.name.name;
                let args = [];
                args.push(t.stringLiteral(tagName));
                let attributes = t.nullLiteral();
                args.push(attributes);
                // ...
            }
        }
    }
}