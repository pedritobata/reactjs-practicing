import "./Challenge3.css";
import { useState } from "react";

const fetchActivity = async (): Promise<Activity | null> => {
  const url = "https://www.boredapi.com/api/activity";

  const activity = await fetch(url);
  const data = await activity.json();
  console.log("data =>", data);

  return activity.ok ? data : null;
};

export default function Challenge3() {
  const [activityList, setActivityList] = useState<Activity[]>([]);

  const getActivityHandler = async () => {
    const activity = await fetchActivity();
    console.log("fetching..");
    if (activity) setActivityList([...activityList, activity]);
  };

  return (
    <>
      <h1 className="title">Challenge 3</h1>
      <div className="action__container">
        <button className="action__button" onClick={getActivityHandler}>
          Generate Activity
        </button>
      </div>
      <ActivityList list={activityList} />
    </>
  );
}

type Activity = {
  activity: string;
  type: string;
  participants: number;
  price: number;
  link: string;
  key: string;
  accessibility: number;
};

type ListProps = {
  list: Activity[];
};

function ActivityList({ list }: ListProps) {
  if (!list.length)
    return <p className="list__empty">No activities to display</p>;

  return (
    <ul className="list__container">
      {list.map((item) => (
        <ActivityItem activity={item} key={item.key} />
      ))}
    </ul>
  );
}

type ItemProps = {
  activity: Activity;
};

function ActivityItem({ activity }: ItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const onExpamdHandler = () => {
    setIsExpanded(!isExpanded);
  };

  if (!activity.activity) return <h4>failed</h4>;

  return (
    <li className="listItem__container">
      {activity.activity}
      <button className="listItem__button" onClick={onExpamdHandler}>
        {isExpanded ? "Collapse" : "Expand"}
      </button>
      {isExpanded && (
        <ul className="listItem__details">
          {Object.entries(activity)
            .slice(1)
            .map((items) => (
              <li key={items[0]}>{`${items[0]}: ${items[1]}`}</li>
            ))}
        </ul>
      )}
    </li>
  );
}
