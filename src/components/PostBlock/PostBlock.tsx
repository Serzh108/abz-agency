import React from 'react';
import styles from './PostBlock.module.scss';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { postRequestSchema } from '../../constants/validationSchemas/postRequest';
import { postRequestForm } from '../../constants';
import Button from '../Button/Button';
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
      position_id: '1',
      // position_id: 0,
      photo: '',
    },
  });

  // --- TEMP!! ---
  const tempARR = ['Frontend developer', 'Backend developer', 'Designer', 'QA'];

  const onSubmitForm: SubmitHandler<postRequestForm> = (data) => {
    console.log('Form submitted:', data);
    reset(); // Reset form values to their default state
  };

  return (
    <section className={styles.wrapper}>
      <h2>Working with POST request</h2>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        {/* <div>
          <label> */}
        {/* Name: */}
        <input {...register('name')} placeholder="Name" />
        {errors.name && <span>{errors.name.message}</span>}
        {/* </label>
        </div> */}
        {/* <div> */}
        {/* <label> */}
        {/* Email: */}
        <input {...register('email')} placeholder="Email" />
        {errors.email && <span>{errors.email.message}</span>}
        {/* </label> */}
        {/* </div> */}
        {/* <div>
          <label> */}
        {/* Phone: */}
        <input {...register('phone')} placeholder="Phone" />
        <span>+38 (XXX) XXX - XX - XX</span>
        {errors.phone && <span>{errors.phone.message}</span>}
        {/* </label>
        </div> */}
        <div>
          {/* --- - --- */}
          <p>Select your position:</p>
          {tempARR &&
            tempARR.length > 0 &&
            tempARR.map((item, index) => (
              <div key={item}>
                <input
                  type="radio"
                  {...register('position_id')}
                  value={index + 1}
                />
                <label>{item}</label>
              </div>
            ))}
          {/* <div>
            <input type="radio" {...register('position_id')} value="1" />
            <label>Frontend developer</label>
          </div>
          <div>
            <input type="radio" {...register('position_id')} value="2" />
            <label> Backend developer</label>
          </div>
          <div>
            <input type="radio" {...register('position_id')} value="3" />
            <label>Designer</label>
          </div>
          <div>
            <input type="radio" {...register('position_id')} value="4" />
            <label>QA</label>
          </div> */}
          {errors.position_id && <span>{errors.position_id.message}</span>}
        </div>

        {/* <input type="file" {...register('photo')} />
        {errors.photo && <span>{errors.photo.message}</span>} */}
        {/* ---- - ---- */}
        <input type="file" id="file" className={styles.fileInput} />
        <label htmlFor="file" className={styles.fileLabel}>
          Upload your photo
        </label>

        <Button title="Sign up" type="submit" disabled={!true} />
      </form>
    </section>
  );
};

export default PostBlock;
