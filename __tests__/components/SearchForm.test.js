import SearchForm from '../../src/components/SearchForm'
import React from 'react';
import { mount } from 'enzyme';

describe('SearchForm component Testing', () => {
    const wrapper = mount(
        <SearchForm query="" />
    )

    const button = wrapper.find('.button')
    const input = wrapper.find('.input')

    test('Search must contains input', () => {
        expect(input.length).toBe(1);
    })
    test('Search must contains submit button', () => {
        expect(button.length).toBe(1);
    })
})