import React from 'react'
import { connect } from 'react-redux'
import ProfileCardForm, { User } from '../components/Authentication/ProfileCardForm'
import Header from '../components/Header'
import Container from '../shared/Container'
import withPermission from '../utils/HOC/withPermission'

declare interface ProfileViewProps {
  user: User
}

const ProfileView: React.FC<ProfileViewProps> = (props) => {
  return <>
    <Header title="AlgaStock" />
    <Container>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <ProfileCardForm user={props.user} />
      </div>
    </Container>
  </>
}

const mapStateToProps = () => ({
  user: {
    name: 'Alvimar Henriques',
    email: 'alvimar.henriques@montreal.com.br'
  }
})

export default connect(mapStateToProps)(
    withPermission(['admin', 'customer'], '/login')(ProfileView)
)