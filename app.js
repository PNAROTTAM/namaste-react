
const nestingElements = React.createElement('div',{ className: 'parent'}, React.createElement('div',{className:'sub-parent'},
[React.createElement('h1',{},'H1 Tag'),React.createElement('h2',{},'H2 Tag')]));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(nestingElements);