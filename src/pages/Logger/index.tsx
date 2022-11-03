import { useStorm } from 'store';

const Logger = () => {
    const state = useStorm((state, subscribe) =>
        subscribe(state)
    );

    return (
        <div style={{ width: '100%', height: '90vh', overflow: 'auto', border: '1px solid black', fontSize: 9, fontFamily: 'monospace'  }}>
            <pre>
                {JSON.stringify(state, null, 4)}
            </pre>
        </div>
    )
}

export default Logger;