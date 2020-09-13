import React from 'react'
import { navigate } from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {

    const { removeDom, author } = props

    const removeFromDom = authorId => {
        removeDom(authorId)
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Authors</th>
                        <th>Actions avaliable</th>
                    </tr>
                </thead>
                <tbody>
                    {author.map((person, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{person.name}</td>
                                <td>
                                    <button onClick={() => {
                                        navigate(`/edit/${person._id}`)
                                    }} >Edit</button>
                                </td>
                                <td>
                                    <DeleteButton
                                        authorId={person._id}
                                        successCallback={() => removeFromDom(person._id)}
                                    />
                                </td>
                            </tr>
                        )
                    })}
                </tbody>

            </table>
        </div>
    )
}