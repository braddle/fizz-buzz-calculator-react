"use client";
import { useSearchParams } from "next/navigation";
import { FormEvent, useState } from "react";
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
export default function Page() {
  const searchParams = useSearchParams();
  const [leapYear, setLeapYear] = useState<string | null>(null);

  function leapYearSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    //const formData = new FormData(event.currentTarget)

    setLeapYear("is a leap year");
  }

  let content = <h2>Coming Soon!</h2>;

  if (
    searchParams !== null &&
    "on" == searchParams!.get("leapYearCalculator")
  ) {
    content = (
      <div>
        {leapYear && <h2>{leapYear}</h2>}
        <form className="leap-year-form" onSubmit={leapYearSubmit}>
          <input type="number" id="year_field" />
          <input type="submit" />
        </form>
      </div>
    );
  }

  return (
    <div>
      <h1>Leap Year Calculator</h1>
      {content}
    </div>
  );
}
