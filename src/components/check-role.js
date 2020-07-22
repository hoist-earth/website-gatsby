import React, { useState, useEffect } from "react"
import { useAuth0 } from "@auth0/auth0-react"

const defaultOnDenied = () => <div className="preloader">Access Denied</div>
const defaultOnChecking = () => (
  <div className="preloader">Checking access...</div>
)

const CheckRole = ({
  children,
  roles,
  onDenied = defaultOnDenied,
  onChecking = defaultOnChecking,
  silent = false,
}) => {
  const { isLoading, isAuthenticated, user } = useAuth0()
  const [checking, setChecking] = useState(true)
  const [accessGranted, setAccessGranted] = useState(false)

  useEffect(() => {
    if (isLoading) return

    if (!isAuthenticated) onDenied()

    roles.forEach(role => {
      if (user["https://hoist.earth/roles"]?.includes(role)) {
        setAccessGranted(true)
      }
    })

    setChecking(false)
  }, [isLoading, isAuthenticated, user, roles, onDenied])

  if (checking) return !silent && onChecking()
  return accessGranted ? children : !silent && onDenied()
}

export default CheckRole
