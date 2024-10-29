import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import Employees from '../pages/services/Employees';
import '@testing-library/jest-dom';

const initialState = {
    employees: {
        employees: [
            {
                id: 1,
                name: 'John Doe',
                email: 'john@example.com',
                phone: '123-456-7890',
                company: { name: 'Example Co.' },
            },
        ],
        loading: false,
        error: null,
    },
};

describe('Employees Component', () => {
    test('renders Employees heading', () => {
        renderWithProviders(<Employees />, { initialState });
        expect(screen.getByText('Employees')).toBeInTheDocument();
    });

    test('displays loading message when loading is true', () => {
        renderWithProviders(<Employees />, {
            initialState: {
                employees: {
                    employees: [],
                    loading: true,
                    error: null,
                },
            },
        });

        expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    test('displays error message when error is present', () => {
        renderWithProviders(<Employees />, {
            initialState: {
                employees: {
                    employees: [],
                    loading: false,
                    error: 'Failed to fetch employees',
                },
            },
        });

        expect(screen.getByText('Failed to fetch employees')).toBeInTheDocument();
    });

    test('displays employee data correctly', () => {
        renderWithProviders(<Employees />, { initialState });
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('john@example.com')).toBeInTheDocument();
        expect(screen.getByText('123-456-7890')).toBeInTheDocument();
        expect(screen.getByText('Example Co.')).toBeInTheDocument();
    });
});
