import React from 'react';

class AgeCalculator extends React.Component {
  state = {};

  calculateAge = () => {
    const dateString = this.dob.value;
    const now = new Date();

    const yearNow = now.getFullYear();
    const monthNow = now.getMonth();
    const dateNow = now.getDate();

    const dob = new Date(dateString);

    const yearDob = dob.getFullYear();
    const monthDob = dob.getMonth();
    const dateDob = dob.getDate();

    let yearAge = yearNow - yearDob;
    let monthAge;

    if (monthNow >= monthDob) {
      monthAge = monthNow - monthDob;
    } else {
      yearAge--;
      monthAge = 12 + monthNow - monthDob;
    }

    let dateAge;
    if (dateNow >= dateDob) {
      dateAge = dateNow - dateDob;
    } else {
      monthAge--;
      dateAge = 31 + dateNow - dateDob;

      if (monthAge < 0) {
        monthAge = 11;
        yearAge--;
      }
    }

    const age = {
      years: yearAge,
      months: monthAge,
      days: dateAge,
    };

    const yearString = age.years > 1 ? 'Years' : 'Year';
    const monthString = age.months > 1 ? ' Months' : ' Month';
    const dayString = age.days > 1 ? ' Days' : ' Day';

    let ageString = '';

    if (age.years > 0 && age.months > 0 && age.days > 0) {
      ageString = `${age.years} ${yearString}, ${age.months} ${monthString}, and ${age.days} ${dayString}`;
    } else if (age.years === 0 && age.months === 0 && age.days > 0) {
      ageString = age.days + dayString;
    } else if (age.years > 0 && age.months === 0 && age.days === 0) {
      ageString = age.years + yearString;
    } else if (age.years > 0 && age.months > 0 && age.days === 0) {
      ageString = `${age.years} ${yearString} and ${age.months} ${monthString}`;
    } else if (age.years === 0 && age.months > 0 && age.days > 0) {
      ageString = `${age.months} ${monthString} and ${age.days} ${dayString}`;
    } else if (age.years > 0 && age.months === 0 && age.days > 0) {
      ageString = `${age.years} ${yearString} and ${age.days} ${dayString}`;
    } else if (age.years === 0 && age.months > 0 && age.days === 0) {
      ageString = age.months + monthString;
    } else {
      ageString = "Oops! Wrong date, can't count the date!";
    }

    this.setState({ageString});
  };

  render() {
    return (
      <div>
        <div className="flex justify-center">
          <input
            className="block w-full cursor-pointer rounded-lg py-5 px-8 font-sans text-xl font-semibold uppercase tracking-widest text-slate-600 drop-shadow-md focus:outline-none lg:w-80"
            ref={r => (this.dob = r)}
            type="date"
          />
        </div>
        <div className="flex justify-center">
          <button
            className="mt-10 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 py-3 px-6 text-2xl font-bold text-slate-50 drop-shadow-md hover:from-blue-700 hover:to-blue-600"
            onClick={this.calculateAge}
          >
            CALCULATE
          </button>
        </div>

        <div className="mt-10 w-full text-center text-xl font-bold text-slate-800 lg:text-4xl">
          {this.state.ageString}
        </div>
      </div>
    );
  }
}

export default AgeCalculator;
