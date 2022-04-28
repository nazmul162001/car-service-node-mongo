import React from 'react';
import { useForm } from 'react-hook-form';

const AddService = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const url = `https://stark-coast-61614.herokuapp.com/service`;
    fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  };
  return (
    <div className="w-50 mx-auto">
      <h2>Please Add a service</h2>
      <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2" placeholder="Your Name" {...register('name')} />
        <textarea
          className="mb-2"
          placeholder="Service Description"
          {...register('description', { required: true })}
        />
        <input
          className="mb-2"
          placeholder="Price"
          type="number"
          {...register('price')}
        />
        <input
          className="mb-2"
          placeholder="Photo URL"
          type="text"
          {...register('img')}
        />
        <input type="submit" value="Add Service" />
      </form>
    </div>
  );
};

export default AddService;
