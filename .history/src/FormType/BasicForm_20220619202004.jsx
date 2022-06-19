import React from 'react';

const BasicForm = () => {
    const {
        control,
        formState: { errors },
    } = useFormContext();
    console.log(errors);
    return (
        <>
            <Controller
                control={control}
                name="firstName"
                rules={{ required: "this field is required." }}
                render={({ field }) => (
                    <TextField
                        id="first-name"
                        label="First Name"
                        variant="outlined"
                        placeholder="Enter Your First Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.firstName)}
                        helperText={errors.firstName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="lastName"
                rules={{ required: "this field is required." }}
                render={({ field }) => (
                    <TextField
                        id="last-name"
                        label="Last Name"
                        variant="outlined"
                        placeholder="Enter Your Last Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.lastName)}
                        helperText={errors.lastName?.message}
                    />
                )}
            />

            <Controller
                control={control}
                name="nickName"
                rules={{ required: "this field is required." }}
                render={({ field }) => (
                    <TextField
                        id="nick-name"
                        label="Nick Name"
                        variant="outlined"
                        placeholder="Enter Your Nick Name"
                        fullWidth
                        margin="normal"
                        {...field}
                        error={Boolean(errors?.nickName)}
                        helperText={errors.nickName?.message}
                    />
                )}
            />
        </>
    );
};

export default BasicForm;

