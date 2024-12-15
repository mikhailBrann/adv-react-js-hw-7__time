import moment from 'moment';

function DateTimePretty(Component: React.ComponentType<any>) {
    return function(props: any) {
        const date = moment(props.date);
        const now = moment();
        const diff = now.diff(date, 'minutes');
        
        let displayDate;
        if (diff < 60) {
            displayDate = `${diff} минут назад`;
        } else if (diff < 24 * 60) {
            displayDate = `${Math.floor(diff / 60)} часов назад`;
        } else {
            displayDate = `${Math.floor(diff / (24 * 60))} дней назад`;
        }
        
        return <Component {...props} date={displayDate} />;
    }
}

export default DateTimePretty;