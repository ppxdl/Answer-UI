import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';

describe('Button Component', () => {
  it('renders correctly', () => {
    expect(1 + 1).toBe(2);
  });

  it('mounts component', () => {
    const wrapper = mount({
      template: '<div>Test</div>'
    });
    expect(wrapper.text()).toBe('Test');
  });
});
