// src/components/tests/test-utils.js
import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

const mockStore = configureMockStore();

export function renderWithProviders(ui, { initialState } = {}) {
    const store = mockStore(initialState);

    return render(
        <Provider store={store}>
            {ui}
        </Provider>
    );
}
