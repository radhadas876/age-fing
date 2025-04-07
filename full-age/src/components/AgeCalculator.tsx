'use client';

import { useState } from 'react';
import { format, differenceInSeconds, differenceInYears, differenceInMonths, differenceInDays, differenceInHours, differenceInMinutes } from 'date-fns';
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

type AgeResult = {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  totalMonths: number;
  totalDays: number;
  totalHours: number;
  totalMinutes: number;
  totalSeconds: number;
};

export function AgeCalculator() {
  const [birthDate, setBirthDate] = useState<Date | undefined>(new Date());
  const [currentDate, setCurrentDate] = useState<Date | undefined>(new Date());
  const [showBirthCalendar, setShowBirthCalendar] = useState(false);
  const [showCurrentCalendar, setShowCurrentCalendar] = useState(false);
  const [ageResult, setAgeResult] = useState<AgeResult | null>(null);

  const calculateAge = () => {
    if (!birthDate || !currentDate) return;

    if (birthDate > currentDate) {
      alert("Birth date cannot be in the future!");
      return;
    }

    const years = differenceInYears(currentDate, birthDate);

    // Calculate remaining months after years
    const dateAfterYears = new Date(birthDate);
    dateAfterYears.setFullYear(dateAfterYears.getFullYear() + years);
    const months = differenceInMonths(currentDate, dateAfterYears);

    // Calculate remaining days after months
    const dateAfterMonths = new Date(dateAfterYears);
    dateAfterMonths.setMonth(dateAfterMonths.getMonth() + months);
    const days = differenceInDays(currentDate, dateAfterMonths);

    // Calculate remaining hours after days
    const dateAfterDays = new Date(dateAfterMonths);
    dateAfterDays.setDate(dateAfterDays.getDate() + days);
    const hours = differenceInHours(currentDate, dateAfterDays);

    // Calculate remaining minutes after hours
    const dateAfterHours = new Date(dateAfterDays);
    dateAfterHours.setHours(dateAfterHours.getHours() + hours);
    const minutes = differenceInMinutes(currentDate, dateAfterHours);

    // Calculate remaining seconds after minutes
    const dateAfterMinutes = new Date(dateAfterHours);
    dateAfterMinutes.setMinutes(dateAfterMinutes.getMinutes() + minutes);
    const seconds = differenceInSeconds(currentDate, dateAfterMinutes);

    // Calculate total values
    const totalMonths = differenceInMonths(currentDate, birthDate);
    const totalDays = differenceInDays(currentDate, birthDate);
    const totalHours = differenceInHours(currentDate, birthDate);
    const totalMinutes = differenceInMinutes(currentDate, birthDate);
    const totalSeconds = differenceInSeconds(currentDate, birthDate);

    setAgeResult({
      years,
      months,
      days,
      hours,
      minutes,
      seconds,
      totalMonths,
      totalDays,
      totalHours,
      totalMinutes,
      totalSeconds
    });
  };

  return (
    <div className="calculator-box">
      <h2 className="calculator-title">Age Calculator</h2>
      <p className="calculator-description">
        The Age Calculator can determine the age or interval between two dates.
        The calculated age will be displayed in years, months, weeks, days, hours, minutes, and seconds.
      </p>

      <div className="calculator-form">
        <div className="p-4 bg-blue-700 text-white mb-4 rounded-md">
          <p className="flex items-center">
            <span className="mr-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 16v-4"/>
                <path d="M12 8h.01"/>
              </svg>
            </span>
            Modify the values and click the Calculate button to use
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
          <div>
            <label className="block mb-2 font-medium">Date of Birth</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full"
                value={birthDate ? format(birthDate, 'MMM d, yyyy') : ''}
                readOnly
                onClick={() => setShowBirthCalendar(!showBirthCalendar)}
              />
              <button
                className="ml-2 p-2 border rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setShowBirthCalendar(!showBirthCalendar);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </button>
            </div>
            {showBirthCalendar && (
              <div className="mt-2 border rounded-md p-2 shadow-md">
                <Calendar
                  mode="single"
                  selected={birthDate}
                  onSelect={(date) => {
                    setBirthDate(date);
                    setShowBirthCalendar(false);
                  }}
                  initialFocus
                />
              </div>
            )}
          </div>

          <div>
            <label className="block mb-2 font-medium">Age at the Date of</label>
            <div className="flex items-center">
              <input
                type="text"
                className="border rounded-md px-3 py-2 w-full"
                value={currentDate ? format(currentDate, 'MMM d, yyyy') : ''}
                readOnly
                onClick={() => setShowCurrentCalendar(!showCurrentCalendar)}
              />
              <button
                className="ml-2 p-2 border rounded-md"
                onClick={(e) => {
                  e.preventDefault();
                  setShowCurrentCalendar(!showCurrentCalendar);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar">
                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                  <line x1="16" x2="16" y1="2" y2="6"/>
                  <line x1="8" x2="8" y1="2" y2="6"/>
                  <line x1="3" x2="21" y1="10" y2="10"/>
                </svg>
              </button>
            </div>
            {showCurrentCalendar && (
              <div className="mt-2 border rounded-md p-2 shadow-md">
                <Calendar
                  mode="single"
                  selected={currentDate}
                  onSelect={(date) => {
                    setCurrentDate(date);
                    setShowCurrentCalendar(false);
                  }}
                  initialFocus
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <Button
            className="calculator-button flex items-center gap-2"
            onClick={calculateAge}
          >
            Calculate
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m12 8 4 4-4 4"/>
              <path d="m8 12h8"/>
            </svg>
          </Button>
        </div>

        {ageResult && (
          <Card className="p-4 my-4 bg-[#f5f6f6]">
            <h3 className="text-xl font-semibold mb-3">Your Age:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium">Age Breakdown:</h4>
                <ul className="list-disc list-inside">
                  <li>{ageResult.years} years</li>
                  <li>{ageResult.months} months</li>
                  <li>{ageResult.days} days</li>
                  <li>{ageResult.hours} hours</li>
                  <li>{ageResult.minutes} minutes</li>
                  <li>{ageResult.seconds} seconds</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium">Or expressed as:</h4>
                <ul className="list-disc list-inside">
                  <li>{ageResult.totalMonths} total months</li>
                  <li>{ageResult.totalDays} total days</li>
                  <li>{ageResult.totalHours} total hours</li>
                  <li>{ageResult.totalMinutes} total minutes</li>
                  <li>{ageResult.totalSeconds} total seconds</li>
                </ul>
              </div>
            </div>
          </Card>
        )}
      </div>

      <div className="calculator-section mt-6">
        <h3 className="font-semibold text-lg mb-2">Related</h3>
        <div className="flex flex-wrap gap-2">
          <a href="/date-calculator" className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">Date Calculator</a>
          <a href="/time-calculator" className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700">Time Calculator</a>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2">About Age Calculation</h3>
        <p className="mb-3">
          The age of a person can be counted differently in different cultures. This calculator is based on the
          most common age system. In this system, age increases on a person's birthday. For example, the age
          of a person who has lived for 3 years and 11 months is 3, and their age will increase to 4 on their
          next birthday one month later. Most western countries use this age system.
        </p>
        <p className="mb-3">
          In some cultures, age is expressed by counting years with or without including the current year.
          For example, a person who is twenty years old is the same age as another person who is in their
          twenty-first year of life. In one of the traditional Chinese age systems, people are born at age 1 and
          their age increases up at the Traditional Chinese New Year rather than their birthday.
        </p>
        <p>
          In some situations, the months and day result of this age calculator may be confusing, especially when
          the starting date is the end of a month. For example, we count Feb. 20 to Mar. 20 to be one month.
          However, there are two ways to calculate the age from Feb. 28, 2022 to Mar. 31, 2022. If we consider
          Feb. 28 to Mar. 28 to be one month, then the result is one month and 3 days. If we consider both Feb. 28
          and Mar. 31 as the end of the month, then the result is one month. Both calculation results are reasonable.
          Similar situations exist for dates like Apr. 30 to May 31, May 30 to June 30, etc. The confusion comes from
          the uneven number of days in different months. In our calculations, we use the former method.
        </p>
      </div>
    </div>
  );
}
