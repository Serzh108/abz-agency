import React from 'react';
import styles from './PostBlock.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postRequestSchema } from '../../constants/validationSchemas/postRequest';
import { postRequestForm } from '../../constants';

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
      position_id: 0,
      photo: '',
    },
  });

  const onSubmitForm: SubmitHandler<postRequestForm> = (data) => {
    console.log('Form submitted:', data);
    reset(); // Reset form values to their default state
  };

  return (
    <section className={styles.wrapper}>
      <h2>Working with POST request</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <div>
          <label>
            Name:
            <input {...register('name')} />
            {errors.name && <span>{errors.name.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Email:
            <input {...register('email')} />
            {errors.email && <span>{errors.email.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Phone:
            <input {...register('phone')} />
            {errors.phone && <span>{errors.phone.message}</span>}
          </label>
        </div>
        <div>
          <label>
            Position:
            <select {...register('position_id')}>
              <option value={1}>Choose position 1</option>
              <option value={2}>Choose position 2</option>
              <option value={3}>Choose position 3</option>
              {/* Add options here */}
            </select>
            {errors.position_id && <span>{errors.position_id.message}</span>}
          </label>
        </div>
        <label>
          Photo:
          <input type="file" {...register('photo')} />
          {errors.photo && <span>{errors.photo.message}</span>}
        </label>

        <button title="Sign up" type="submit" />
      </form>
    </section>
  );
};

export default PostBlock;
