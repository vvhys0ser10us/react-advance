import React, { useState, useEffect } from 'react'

const url = 'https://api.github.com/users'

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async () => {
    const response = await fetch(url)
    const users = await response.json()
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <div>
      <h2>fetch data</h2>
      <h2>Github Users</h2>
      <ul className="users">
        {users.map((user) => {
          const { id, avatar_url, login, html_url } = user
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default UseEffectFetchData
