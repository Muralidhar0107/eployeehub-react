// src/components/tests/Employees.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import Employees from '../pages/services/Employees';
import '@testing-library/jest-dom';

const mockStore = configureMockStore();
const initialState = {
    employees: {
        employees: [],
        loading: false,
        error: null,
    },
};

describe('Employees Component', () => {
    let store;

    beforeEach(() => {
        store = mockStore(initialState);
    });

    test('renders without crashing', () => {
        render(
            <Provider store={store}>
                <Employees />
            </Provider>
        );

        expect(screen.getByText('Employees')).toBeInTheDocument();
    });
});