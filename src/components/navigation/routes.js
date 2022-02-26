import React from 'react';
import Transactions from '../Pages/transaction';
import AddTransaction from '../Pages/addTransaction';
import Insights from '../Pages/insights';

const routes = {
    '/transactions': () => <Transactions />,
    '/add-transaction': () => <AddTransaction />,
    '/insights': () => <Insights />
}

export default routes;