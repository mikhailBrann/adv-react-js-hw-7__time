import DateTimePretty from './DateTimePretty';
import DateTime from './DateTime';

const DateTimeWithPretty = DateTimePretty(DateTime);

function Video(props: any) {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimeWithPretty date={props.date} />
        </div>
    )
}

export default Video;