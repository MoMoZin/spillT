import Image from 'next/image';

const ProfilePicture = (props: profilePicture) => {
  return (
    <Image
      src={props.imageUrl}
      alt={props.altText}
      width={props.imageWidth}
      height={props.imageHeight}
      className={props.styleClass} />
  );
};

export default ProfilePicture;