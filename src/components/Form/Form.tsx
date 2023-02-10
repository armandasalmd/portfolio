import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'
import ReCAPTCHA from 'react-google-recaptcha'
import { useEffect, useState } from 'react'
import validator from 'validator'

interface FormProps {
  isDark: boolean;
}

export function Form(props: FormProps) {
  const [state, handleSubmit] = useForm('xjvllwap')

  const [validEmail, setValidEmail] = useState(false)
  const [isHuman, setIsHuman] = useState(false)
  const [message, setMessage] = useState('')

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message received. Thanks!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      })
    }
  })
  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Thanks for contacting me!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
        >
          Back to top
        </button>
        <ToastContainer />
      </ContainerSucces>
    )
  }

  return (
    <Container>
      <h2>Contact me using the form below</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value)
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Leave your message..."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value)
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        {
          props.isDark && 
          <ReCAPTCHA
          theme='dark'
          sitekey="6LcjyCEgAAAAAFUOGoKK0ww80zGfjHpDOg9SMFKE"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>
        }
        {
          !props.isDark && 
          <ReCAPTCHA
          sitekey="6LcjyCEgAAAAAFUOGoKK0ww80zGfjHpDOg9SMFKE"
          onChange={(e) => {
            setIsHuman(true)
          }}
        ></ReCAPTCHA>
        }
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message || !isHuman}
        >
          Send
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
