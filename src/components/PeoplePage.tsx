import { useCallback, useEffect, useState } from 'react';
import { Loader } from './Loader';
import { Person } from '../types';
import { getPeople } from '../api';
import { PeopleTable } from './PeopleTable/PeopleTable';

export const PeoplePage = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [hasLoadingError, setHasLoadingError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const getPeopleFromServer = useCallback(async () => {
    try {
      const peopleFromServer = await getPeople();

      const getParent = (parentName: string | null) => peopleFromServer.find(
        person => person.name === parentName,
      );

      setPeople(peopleFromServer.map(person => ({
        ...person,
        mother: getParent(person.motherName),
        father: getParent(person.fatherName),
      })));
      setIsLoading(true);
    } catch {
      setHasLoadingError(true);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getPeopleFromServer();
  }, []);

  return (
    <>
      <h1 className="title">People Page</h1>

      <div className="block">
        <div className="box table-container">
          {isLoading && (
            <Loader />
          )}

          {hasLoadingError && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}

          {isLoading && !people.length && (
            <p data-cy="noPeopleMessage">
              There are no people on the server
            </p>
          )}
          <PeopleTable people={people} />
        </div>
      </div>
    </>
  );
};
