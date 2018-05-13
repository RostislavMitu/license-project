import React from 'react';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import { DateUtils } from 'react-day-picker';

import dateFnsFormat from 'date-fns/format';
import dateFnsParse from 'date-fns/parse';

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

export default class DayPicker extends React.Component {
  constructor(props) {
    super(props);
    this.handleFromChange = this.handleFromChange.bind(this);
    this.handleToChange = this.handleToChange.bind(this);
    this.state = {
      from: undefined,
      to: undefined,
    };
  }

  handleFromChange(from) {
    this.setState({ from });
  }

  handleToChange(to) {
    this.setState({ to });
  }

  render() {
    const { from, to } = this.state;
    const modifiers = { start: from, end: to };
    return (
      <div className="wrapper small-2 input-wrapper form">
        <DayPickerInput
          value={from}
          placeholder="From"
          format="D/M/YYYY"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { after: to },
            toMonth: to,
            modifiers
          }}
          inputProps={{
            className: 'form__input'
          }}
          onDayChange={this.handleFromChange}
        />
        <DayPickerInput
          value={to}
          placeholder="To"
          format="D/M/YYYY"
          formatDate={formatDate}
          parseDate={parseDate}
          dayPickerProps={{
            selectedDays: [from, { from, to }],
            disabledDays: { before: from },
            modifiers,
            month: from,
            fromMonth: from
          }}
          inputProps={{
            className: 'form__input'
          }}
          onDayChange={this.handleToChange}
        />
      </div>
    );
  }
}
