import { useState, useMemo } from "react";
import { User } from "../types";
import "./CustomerList.css";
import { UNKNOWN_INFO } from "../constants";
import {
  getFormattedFullname,
  sortUsersByFullnameAsc,
  sortUsersByFullnameDesc,
} from "../utils";
import OrderButton from "./OrderButton";

interface Props {
  list: Partial<User>[];
  renderItem?: (id: number) => JSX.Element;
}

const CustomerList = ({ list, renderItem }: Props): JSX.Element => {
  const [isAsc, setIsAsc] = useState(true);

  const sortedUsers = useMemo(
    () =>
      isAsc
        ? sortUsersByFullnameAsc([...list])
        : sortUsersByFullnameDesc([...list]),
    [isAsc, list]
  );

  return (
    <section>
      <OrderButton
        isAsc={isAsc}
        onAsc={() => setIsAsc(true)}
        onDesc={() => setIsAsc(false)}
      />
      <table className="CustomerList__table">
        <thead>
          <tr>
            <th>Customer</th>
            <th>Email</th>
            <th>Employment</th>
            <th>Subscription</th>
          </tr>
        </thead>
        <tbody>
          {sortedUsers.map((item, idx) => {
            const {
              id,
              avatar,
              first_name,
              last_name,
              email,
              employment,
              subscription,
            } = item;
            const title = employment?.title || UNKNOWN_INFO;
            const plan = subscription?.plan || UNKNOWN_INFO;
            const status = subscription?.status || UNKNOWN_INFO;
            return (
              <tr key={id}>
                <td>
                  <img src={avatar} alt={last_name} />
                  <strong>{getFormattedFullname(first_name, last_name)}</strong>
                  {renderItem && id && renderItem(id)}
                </td>
                <td>{email}</td>
                <td>{title}</td>
                <td>
                  {plan}
                  <span>{status}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};

export default CustomerList;
