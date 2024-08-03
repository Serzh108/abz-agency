import React, { useEffect, useState } from 'react';
import styles from './PostBlock.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postRequestSchema } from '../../constants/validationSchemas/postRequest';
import Button from '../Button/Button';
import { createUser, getPositions } from '../../services/getData';
import { INewUser, IPosinion, postRequestForm } from '../../types';

const PostBlock: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<postRequestForm>({
    resolver: yupResolver(postRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: [],
    },
  });

  const watchPhoto = watch('photo'); // Watch the photo field

  const [positions, setPositions] = useState<IPosinion[]>([]);
  useEffect(() => {
    const receivePositions = async () => {
      const endpoint = `/positions`;
      const positions = await getPositions(endpoint);
      // console.log(' -- positions -> ', positions);
      positions?.success && setPositions(positions.positions);
    };
    receivePositions();
  }, []);

  const [newUser, setNewUser] = useState<INewUser>();

  const createNewUser = async (data: postRequestForm) => {
    const endpoint = `/users`;
    const newUser = await createUser(endpoint, data);
    console.log(' -- newUser in func -> ', newUser);
    newUser?.success && setNewUser(newUser);
  };

  const onSubmitForm: SubmitHandler<postRequestForm> = (data) => {
    console.log('Form submitted:', data);
    // reset(); // Reset form values to their default state
    // reset({ name: '', email: '', phone: '', position_id: 0, photo: [] });
    // const formData = new FormData();
    // formData.append('name', data.name);
    // formData.append('email', data.email);
    // formData.append('phone', data.phone);
    // formData.append('position_id', data.position_id.toString());
    // if (data.photo.length > 0) {
    //   formData.append('photo', data.photo[0]);
    // }
    // Logging the FormData entries
    // for (const pair of formData.entries()) {
    //   console.log(`${pair[0]}: ${pair[1]}`);
    // }
    createNewUser(data);
  };

  return (
    <section className={styles.wrapper}>
      <h2>Working with POST request</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <input {...register('name')} placeholder="Name" />
          {errors.name && (
            <span className={styles.errorMessage}>{errors.name.message}</span>
          )}
        </div>
        <div>
          <input {...register('email')} placeholder="Email" />
          {errors.email && (
            <span className={styles.errorMessage}>{errors.email.message}</span>
          )}
        </div>
        <div>
          <input {...register('phone')} placeholder="Phone" />
          {errors.phone ? (
            <span className={styles.errorMessage}>{errors.phone.message}</span>
          ) : (
            <span>+38 (XXX) XXX - XX - XX</span>
          )}
        </div>

        <div>
          <p>Select your position:</p>
          {positions &&
            positions.length > 0 &&
            positions.map((item, index) => (
              <div key={item.name}>
                <input
                  id={`radio${index}`}
                  type="radio"
                  {...register('position_id')}
                  value={item.id}
                />
                <label htmlFor={`radio${index}`}>{item.name}</label>
              </div>
            ))}

          {errors.position_id && <span>{errors.position_id.message}</span>}
        </div>

        <input
          type="file"
          id="file"
          className={styles.fileInput}
          {...register('photo')}
        />
        <label htmlFor="file" className={styles.fileLabel}>
          {/* Upload your photo */}
          {watchPhoto && watchPhoto.length > 0
            ? `${watchPhoto[0].name}`
            : `Upload your photo`}
        </label>
        {errors.photo && (
          <span className={styles.errorMessage}>{errors.photo.message}</span>
        )}

        <Button title="Sign up" type="submit" disabled={!true} />
      </form>
    </section>
  );
};

export default PostBlock;
