import { UNKNOWN_INFO } from "./constants";
import { User } from "./types";

export const getFormattedFullname = (
  firstName: string = "",
  lastName: string = ""
): string => {
  if (!firstName && !lastName) return UNKNOWN_INFO;
  return `${lastName}, ${firstName}`;
};

export const sortUsersByFullnameAsc = (
  users: Partial<User>[]
): Partial<User>[] => {
  users.sort((u1, u2) =>
    getFormattedFullname(
      u1.first_name?.toUpperCase(),
      u1.last_name?.toUpperCase()
    )
      .replace(",", "")
      .localeCompare(
        getFormattedFullname(
          u2.first_name?.toUpperCase(),
          u2.last_name?.toUpperCase()
        ).replace(",", "")
      )
  );

  return users;
};

export const sortUsersByFullnameDesc = (
  users: Partial<User>[]
): Partial<User>[] => {
  users.sort((u1, u2) =>
    getFormattedFullname(
      u2.first_name?.toUpperCase(),
      u2.last_name?.toUpperCase()
    )
      .replace(",", "")
      .localeCompare(
        getFormattedFullname(
          u1.first_name?.toUpperCase(),
          u1.last_name?.toUpperCase()
        ).replace(",", "")
      )
  );

  return users;
};

export const getSearchUsers = (
  searchTerm: string,
  users: Partial<User>[]
): Partial<User>[] => {
  return searchTerm
    ? users.filter(
        ({ first_name, last_name }) =>
          first_name?.toUpperCase().startsWith(searchTerm.toUpperCase()) ||
          last_name?.toUpperCase().startsWith(searchTerm.toUpperCase())
      )
    : users;
};

export const getActiveSubUsers = (users: Partial<User>[]): Partial<User>[] => {
    return users.filter(user => user.subscription?.status === 'Active');
}
