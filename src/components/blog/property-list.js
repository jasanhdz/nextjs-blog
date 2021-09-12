import styled from "styled-components"

const Avatar = styled.div`
  display: flex;
  align-items: center;
  figure, img {
    border-radius: 50%;
  }
  figure {
    background: linear-gradient(51.32deg, rgb(250, 5, 124) 0%, rgb(7, 4, 254) 100%, rgba(196, 196, 196, 0) 100%);
    padding: 2.5px 2.5px 2.5px 2.4px;
    width: 30px;
    height: 30px;
    margin: 0;
    margin-right: 10px;
  }
  img {
    width: 100%;
    object-fit: cover;
  }
`

const avatarRandom = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80' 

function PropertyList({ propertyList = [] }) {
  return (
    <>
      {propertyList.map((property) => {
        switch (property.type) {
          case 'person':
            const { avatar_url } = property
            return (
              <Avatar key={property.id}>
                <figure>
                  <img width={30} height={30} src={avatar_url || avatarRandom} alt={property.name} />
                </figure>
                <p key={property.id}>{property.name}</p>
              </Avatar>
            ) 
          case 'text':
            return <p key={property.id} className="description">{property.plain_text}</p>
          default:
            return null
        }
      })}
    </>
  )
}

export default PropertyList