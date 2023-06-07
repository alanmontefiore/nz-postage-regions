import { getRegion } from '../index';

test('northIslandRural', () => {
    expect(getRegion('0972')).toBe('northIslandRural');
});

test('southIslandRural', () => {
    expect(getRegion('9393')).toBe('southIslandRural');
});

test('auckland', () => {
    expect(getRegion('0626')).toBe('auckland');
});

test('waikato', () => {
    expect(getRegion('3500')).toBe('waikato');
});

test('gisborneHawkesBay', () => {
    expect(getRegion('4022')).toBe('gisborneHawkesBay');
});

test('bayOfPlenty', () => {
    expect(getRegion('3122')).toBe('bayOfPlenty');
});

test('taranakiManawatuWhanganui', () => {
    expect(getRegion('5510')).toBe('taranakiManawatuWhanganui');
});

test('wellington', () => {
    expect(getRegion('6035')).toBe('wellington');
});

test('nelsonMarlboroughTasman', () => {
    expect(getRegion('7010')).toBe('nelsonMarlboroughTasman');
});

test('canterburyWestCoast', () => {
    expect(getRegion('8014')).toBe('canterburyWestCoast');
});

test('otago', () => {
    expect(getRegion('9012')).toBe('otago');
});

test('invalidPostCode', () => {
    expect(getRegion('8888')).toBe('notFound');
});

test('emptyPostCode', () => {
    expect(getRegion('')).toBe('notFound');
});
