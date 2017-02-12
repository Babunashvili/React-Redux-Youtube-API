import SearchResult from '../../components/SearchResult'
import React from 'react';
import { mount } from 'enzyme';

describe('SearchResult component Testing', () => {
    const result = {
        id: { videoId: 'Ai__9Wd5x9g' },
        snippet: {
            thumbnails: {
                default: {
                    url: 'https://i.ytimg.com/vi/Ai__9Wd5x9g/default.jpg'
                }
            },
            title: 'Some Fake Title',
            description: 'Some Fake Description'
        }
    }
    const wrapper = mount(
        <SearchResult result={result} />
    )

    const title = wrapper.find('.content Link strong')
    const description = wrapper.find('.content small')
    const img = wrapper.find('.media-left img')
    const imgLink = wrapper.find('.media-left Link')
    const titleLink = wrapper.find('.content Link')

    test('SearchResult title must be `Some Fake Title`', () => {
        expect(title.text()).toBe('Some Fake Title');
    })
    test('SearchResult description must be `Some Fake Description`', () => {
        expect(description.text()).toBe('Some Fake Description');
    })
    test('SearchResult img must be `https://i.ytimg.com/vi/Ai__9Wd5x9g/default.jpg`', () => {
        expect(img.prop('src')).toBe('https://i.ytimg.com/vi/Ai__9Wd5x9g/default.jpg');
    })
    test('SearchResult img Link must be `/watch/Ai__9Wd5x9g`', () => {
        expect(imgLink.prop('to')).toBe('/watch/Ai__9Wd5x9g');
    })
    test('SearchResult title Link must be `/watch/Ai__9Wd5x9g`', () => {
        expect(titleLink.prop('to')).toBe('/watch/Ai__9Wd5x9g');
    })
})