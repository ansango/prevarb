

import { useRouter } from 'next/router';
import { useState } from 'react';
import CalendarLib from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Calendar = () => {
    const { locale } = useRouter();
    const [value, onChange] = useState(new Date());
    const calendarType = locale === "en" ? 'US' : "ISO 8601"
    const newLocale = locale === "gl" ? "es" : locale;
    return (
        <div>
            <CalendarLib
                onChange={onChange}
                value={value}
                showNavigation={false}
                calendarType={calendarType}
                locale={newLocale}
            />
        </div>
    );
};

export default Calendar;
