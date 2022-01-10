import React, { useState, useEffect } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'
const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState('true')
  const [isError, setIsError] = useState('false')
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status <= 299 && resp.status >= 200) {
          return resp.json()
        } else {
          setIsLoading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        setUser({ ...user })
        setIsLoading(false)
        setIsError(false)
      })
      .catch((error) => console.log(error))
  }, [])

  if (isLoading) {
    return (
      <div>
        <h2>multiple returns</h2>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (isError) {
    return (
      <div>
        <h2>multiple returns</h2>
        <h1>User Not Found</h1>
      </div>
    )
  }

  return (
    <div>
      <h2>multiple returns</h2>

      <img src={user.avatar_url} alt={user.login} />
      <div>
        <h3>{user.login}</h3>
        <a href={user.html_url}>Profile</a>
      </div>
    </div>
  )
}

export default MultipleReturns
