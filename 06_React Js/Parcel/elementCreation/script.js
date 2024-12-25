const element = React.createElement('div', { id: 'container'}, [
    React.createElement('nav', { id: 'navbar', key : '1'},
        [
            React.createElement('h1',{id : 'heading',key : '1'},'ReactElement'),
            React.createElement('ul',{id : 'listContainer', key : '2'},
                [
                    React.createElement('li',{ key : '1'},'Home'),
                    React.createElement('li',{ key : '2'},'About'),
                    React.createElement('li',{ key : '3'},'Gallery'),
                    React.createElement('li',{ key : '4'},'Blog'),
                    React.createElement('li',{ key : '5'},'Contact'),
                ]),
            React.createElement('button',{id : 'btn', key : '3'},'Login')
        ]),
    React.createElement('section',{id : 'imgContainer', key : '2'},
        [
            React.createElement('img',{src : 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg', key : '1'}),
        ])
    ]);

ReactDOM.createRoot(document.querySelector('#root')).render(element);