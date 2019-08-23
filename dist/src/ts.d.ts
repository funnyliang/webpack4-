import * as React from 'react';
interface props {
    color: string;
}
interface state {
    size: number;
}
declare class App extends React.Component<props, state> {
    state: {
        size: number;
    };
    _add(n: number): void;
    render(): JSX.Element;
}
export default App;
