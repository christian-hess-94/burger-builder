import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Layout from './hoc/Layout/Layout';
import React from 'react';

function App() {
    return (
        <Layout>
            <BurgerBuilder />
        </Layout>
    );
}

export default App;
