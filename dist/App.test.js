import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { render, screen } from '@testing-library/react';
import App from './App';
test('renders learn react link', () => {
    render(_jsx(App, {}));
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});
