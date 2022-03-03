## React Hooks vs React Component
react都核心思想就是，将一个页面拆成一堆独立的，可复用的组件，并且用自上而下的单向数据流的形式将这些组件串联起来。
项目中实际上很多react组件冗长且难以复用尤其是那些写成class的组件，它们本身包含了状态（state），所以复用这类组件就变得很麻烦。
官方推荐: 渲染属性（Render Props）和高阶组件（Higher-Order Components）。
1. Render Props: 使用一个值为函数的prop来传递需要动态渲染的nodes或组件。
``` jsx
class Data extends React.Component {
    construct(props) {
        super(props);
        this.state = { target: 'tar' }
    }
    render() {
        return (
            <div>
                {this.props.render(this.state)}
            </div>
        )
    }
}
```

2.