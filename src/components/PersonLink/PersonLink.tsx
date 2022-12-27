import { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { Person } from '../../types';

interface Props {
  person: Person;
}

export const PersonLink: FC<Props> = (props) => {
  const { person } = props;
  const { slug: selectedSlug } = useParams();

  return (
    <tr
      data-cy="person"
      className={classNames({
        'has-background-warning': selectedSlug === person.slug,
      })}
    >
      <td>
        <Link
          className={classNames({
            'has-text-danger': person.sex === 'f',
          })}
          to={`/people/${person.slug}`}
        >
          {person.name}
        </Link>
      </td>

      <td>{person.sex}</td>
      <td>{person.born}</td>
      <td>{person.died}</td>
      <td>
        {person.mother
          ? (
            <Link
              className="has-text-danger"
              to={`/people/${person.mother.slug}`}
            >
              {person.motherName}
            </Link>
          )
          : (
            <>
              {person.motherName || '-'}
            </>
          )}
      </td>
      <td>
        {person.father
          ? (
            <Link
              className="has-text-blue"
              to={`/people/${person.father.slug}`}
            >
              {person.fatherName}
            </Link>
          )
          : (
            <>
              {person.fatherName || '-'}
            </>
          )}
      </td>
    </tr>
  );
};
