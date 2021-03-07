import Button from '@material-ui/core/Button'
import { useState } from 'react'
import Modal from '@material-ui/core/Modal'
import LoginWindow from './LoginWindow/LoginWindow'

export default function LoginButton() {
  // click handler
  const [loginOpen, setLoginOpen] = useState(false)

  return (
    <>
      <Button color="inherit" onClick={() => setLoginOpen(true)}>Sign in</Button>
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <LoginWindow />
      </Modal>
    </>
  )
}
