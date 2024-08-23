// src/app/login/page.tsx
import React from 'react';
import { Box, Button, Container, Paper, TextField, Typography } from '@mui/material';
import styles from './login.module.css';

const LoginPage: React.FC = () => {
    return (
        <main className={styles.main}>
            <Box sx={{
                width: '360px',
            }}>
                <Typography variant="h5" component="h1" className={styles.title}>
                    EduSlotにログイン
                </Typography>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <form className={styles.form}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="メールアドレス"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            className={styles.textField}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="パスワード"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            className={styles.textField}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            className={styles.button}
                        >
                            ログイン
                        </Button>
                    </form>
                </Box>
            </Box>
        </main>
    );
};

export default LoginPage;