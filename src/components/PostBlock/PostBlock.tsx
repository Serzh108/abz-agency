import React, { useEffect, useState } from 'react';
import styles from './PostBlock.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postRequestSchema } from '../../constants/validationSchemas/postRequest';
import { postRequestForm } from '../../constants';
import Button from '../Button/Button';
import { getPositions } from '../../services/getData';
import { IPosinion } from '../../types';
// import Radio from '@mui/material/Radio';
// import RadioGroup from '@mui/material/RadioGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import FormControl from '@mui/material/FormControl';
// import FormLabel from '@mui/material/FormLabel';

const PostBlock: React.FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<postRequestForm>({
    resolver: yupResolver(postRequestSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      position_id: 1,
      photo: undefined,
    },
  });

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

  const onSubmitForm: SubmitHandler<postRequestForm> = (data) => {
    console.log('Form submitted:', data);
    reset(); // Reset form values to their default state
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
          {/* --- - --- */}
          <p>Select your position:</p>
          {positions &&
            positions.length > 0 &&
            positions.map((item) => (
              <div key={item.name}>
                <input
                  type="radio"
                  {...register('position_id')}
                  value={item.id}
                />
                <label>{item.name}</label>
              </div>
            ))}

          {errors.position_id && <span>{errors.position_id.message}</span>}
        </div>

        {/* <input type="file" {...register('photo')} />
        {errors.photo && <span>{errors.photo.message}</span>} */}
        {/* ---- - ---- */}
        <input
          type="file"
          id="file"
          className={styles.fileInput}
          {...register('photo')}
        />
        <label htmlFor="file" className={styles.fileLabel}>
          Upload your photo
        </label>

        <Button title="Sign up" type="submit" disabled={!true} />
      </form>
    </section>
  );
};

export default PostBlock;
