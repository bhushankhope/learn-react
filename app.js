const parent = React.createElement('div', { 'id': 'parent' }, [
    React.createElement('div', { 'id': 'child1' }, [
        React.createElement('h1', { 'id': 'heading-1' }, "I am a child1 h1 child"),
        React.createElement('h2', { 'id': 'heading-2' }, "I am a child1 h2 child")
    ]),
    React.createElement('div', { 'id': 'child2' }, [
        React.createElement('h1', { 'id': 'heading-1' }, "I am a child2 h1 child"),
        React.createElement('h2', { 'id': 'heading-2' }, "I am a child2 h2 child")
    ])])

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)
