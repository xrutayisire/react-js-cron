import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Cron from '../Cron';
describe('Cron update value test suite', () => {
  it("should check that it's possible to change the period from minute to year", async () => {
    const user = userEvent.setup();
    const value = '* * * * *';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue
    }));
    await waitFor(() => {
      user.click(screen.getByText('minute'));
    });
    await waitFor(() => {
      user.click(screen.getByText('year'));
    });
    await waitFor(() => {
      expect(screen.getByTestId('select-period').textContent).toContain('year');
      expect(screen.getByTestId('custom-select-months').textContent).toContain('every month');
      expect(screen.getByTestId('custom-select-month-days').textContent).toContain('every day of the month');
      expect(screen.getByTestId('custom-select-week-days').textContent).toContain('every day of the week');
      expect(screen.getByTestId('custom-select-hours').textContent).toContain('every hour');
      expect(screen.getByTestId('custom-select-minutes').textContent).toContain('every minute');
    });
  });
  it("should check that it's possible to select specific minutes", async () => {
    const user = userEvent.setup();
    const value = '1,4 * * * *';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue
    }));
    await waitFor(() => {
      user.click(screen.getByText('1,4'));
    });
    await waitFor(() => {
      user.click(screen.getByText('59'));
    });
    await waitFor(() => {
      expect(screen.getByTestId('custom-select-minutes').textContent).toContain('1,4,59');
    });
    await waitFor(() => {
      user.click(screen.getByText('8'));
    });
    await waitFor(() => {
      expect(screen.getByTestId('custom-select-minutes').textContent).toContain('1,4,8,59');
    });
  });
  it("should check that it's possible to select a periodicity with double click", async () => {
    const user = userEvent.setup();
    const value = '1,4 * * * *';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue
    }));
    await waitFor(() => {
      user.click(screen.getByText('1,4'));
    });
    await waitFor(() => {
      user.dblClick(screen.getByText('2'));
    });
    await waitFor(() => {
      expect(screen.getByTestId('custom-select-minutes').textContent).toContain('every 2');
    });
  });
  it("should check that it's possible to change a periodicity with double click", async () => {
    const user = userEvent.setup();
    const value = '*/2 * * * *';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue
    }));
    await waitFor(() => {
      user.click(screen.getByText('every 2'));
    });
    await waitFor(() => {
      user.dblClick(screen.getByText('4'));
    });
    await waitFor(() => {
      expect(screen.getByTestId('custom-select-minutes').textContent).toContain('every 4');
    });
  });
  it("should check that it's possible to clear cron value", async () => {
    const user = userEvent.setup();
    const value = '1 1 1 1 1';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue
    }));
    await waitFor(() => {
      user.click(screen.getByText('Clear'));
    });
    await waitFor(() => {
      expect(setValue).toHaveBeenNthCalledWith(2, '* * * * *', {
        selectedPeriod: 'year'
      });
    });
  });
  it("should check that it's possible to clear cron value with empty", async () => {
    const user = userEvent.setup();
    const value = '1 1 1 1 1';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue,
      clearButtonAction: "empty"
    }));
    await waitFor(() => {
      user.click(screen.getByText('Clear'));
    });
    await waitFor(() => {
      expect(setValue).toHaveBeenNthCalledWith(2, '', {
        selectedPeriod: 'year'
      });
    });
  });
  it("should check that it's possible to clear cron value when @reboot is set", async () => {
    const user = userEvent.setup();
    const value = '@reboot';
    const setValue = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue,
      shortcuts: true
    }));
    await waitFor(() => {
      user.click(screen.getByText('Clear'));
    });
    await waitFor(() => {
      expect(setValue).toHaveBeenNthCalledWith(2, '* * * * *', {
        selectedPeriod: 'day'
      });
    });
  });
  it('should check that pressing clear setting an empty value throw an error if not allowed', async () => {
    const user = userEvent.setup();
    const value = '1 1 1 1 1';
    const setValue = jest.fn();
    const onError = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue,
      allowEmpty: "never",
      clearButtonAction: "empty",
      onError: onError
    }));
    await waitFor(() => {
      user.click(screen.getByText('Clear'));
    });
    await waitFor(() => {
      expect(setValue).toHaveBeenNthCalledWith(2, '', {
        selectedPeriod: 'year'
      });
      expect(onError).toHaveBeenNthCalledWith(3, {
        description: 'Invalid cron expression',
        type: 'invalid_cron'
      });
    });
  });
  it("should check that pressing clear setting an empty value don't throw an error if not allowed", async () => {
    const user = userEvent.setup();
    const value = '1 1 1 1 1';
    const setValue = jest.fn();
    const onError = jest.fn();
    render(React.createElement(Cron, {
      value: value,
      setValue: setValue,
      allowEmpty: "always",
      clearButtonAction: "empty",
      onError: onError
    }));
    await waitFor(() => {
      user.click(screen.getByText('Clear'));
    });
    await waitFor(() => {
      expect(setValue).toHaveBeenNthCalledWith(2, '', {
        selectedPeriod: 'year'
      });
      expect(onError).toHaveBeenNthCalledWith(3, undefined);
    });
  });
});