import { useState, useEffect } from 'react';
import { useUserContext } from '../UserProvider';
import Summary from '../components/Summary';
import { FormControl,TextField,Button,Stack } from '@mui/material';

export default function LoginInfos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { user, setUser } = useUserContext();

  const handleChange = (e: { target: { name: string; value: string; }; }) => {
      const { name, value } = e.target;
      setFormData({
          ...formData,
          [name]: value
      });
  };

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || '',
        email: user.email || '',
        phone: user.phone || '',
        password: user.password || ''
      });
    }
  }, [user]);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      setUser(formData);
      setIsSubmitted(true);
  };

  return (
    isSubmitted ? <Summary /> : (
      <Stack spacing={2}> 
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth style={{marginTop:"20px", gap:"20px"}} >
            <TextField value={formData.name} id='fullName' name='name' type='text' label="Ad Soyad" variant='outlined' onChange={handleChange} required />
            <TextField value={formData.email} id='email' name='email' type='email' label="E-Posta" variant='outlined' onChange={handleChange} required />
            <TextField value={formData.phone} id='phone' name='phone' type='text' label="Telefon Numarası" variant='outlined' onChange={handleChange} required />
            <TextField value={formData.password} id='password' name='password' type='password' label="Şifre" variant='outlined' onChange={handleChange} required />
            <Button variant="contained" type='submit'>
              Gönder
            </Button>
          </FormControl>
        </form>
      </Stack>
    )
  );
}
