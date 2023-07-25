<Box
pt={0.5}
pb={3}
px={3}
sx={{
  fontFamily: "Poppins",
}}
>
<Grid container>
   <Grid item xs={12} md={6} xl={4}>
    <TextField
      size="small"
      label="Age"
      id="age"
      value={expage}
      onChange={(e) => setExpage(e.target.value)}
      fullWidth
      variant="standard"
      //className={classes.input}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    />
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      //className={classes.select}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    >
      <InputLabel id="mother-tongue-label">
        Mother Tongue
      </InputLabel>
      <Select
        labelId="mother-tongue-label"
        value={explanguage}
        onChange={(e) =>
          setExplanguage(e.target.value)
        }
        label="Mother Tongue"
        //className={classes.select}
        InputLabelProps={{
          classes: {
            //root: classes.label,
            //focused: classes.label,
          },
        }}
      >
        <MenuItem value="Tamil">Tamil</MenuItem>
        <MenuItem value="Telugu">Telugu</MenuItem>
        <MenuItem value="Malayalam">
          Malayalam
        </MenuItem>
        <MenuItem value="Kannada">Kannada</MenuItem>
        <MenuItem value="Hindi">Hindi</MenuItem>
        <MenuItem value="Others">Others</MenuItem>
        {/* add more options here */}
      </Select>
    </FormControl>
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      //className={classes.select}
    >
      <InputLabel id="Maritual-Status">
        Maritual Status
      </InputLabel>
      <Select
        labelId="Maritual-Status"
        value={expmaritalStatus}
        onChange={(e) =>
          setExpMaritalStatus(e.target.value)
        }
        label="Mother Tongue"
      >
        <MenuItem value="Unmarried">
          Unmarried
        </MenuItem>
        <MenuItem value="Divorced">
          Divorced
        </MenuItem>
        <MenuItem value="Widowed">Widowed</MenuItem>
        <MenuItem value="Waiting For Divorce">
          Waiting For Divorce
        </MenuItem>

        {/* add more options here */}
      </Select>
    </FormControl>
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    <TextField
      size="small"
      label="Educational Qualification"
      value={expeducationalQualification}
      onChange={(e) =>
        setExpEducationalQualification(
          e.target.value
        )
      }
      fullWidth
      variant="standard"
      //className={classes.input}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    />
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <TextField
      size="small"
      label="Job"
      value={expjob}
      onChange={(e) => setExpJob(e.target.value)}
      fullWidth
      variant="standard"
      //className={classes.input}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    />
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <TextField
      size="small"
      label="Income per Month"
      value={expincomePerMonth}
      onChange={(e) =>
        setExpIncomePerMonth(e.target.value)
      }
      fullWidth
      variant="standard"
      //className={classes.input}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    />
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      //className={classes.select}
    >
      <InputLabel id="Caste-label">
        Caste
      </InputLabel>
      <Select
        labelId="Caste-label"
        value={expcaste}
        onChange={(e) =>
          setExpCaste(e.target.value)
        }
        label="Caste"
      >
        <MenuItem value="Mudaliyar">
          Mudaliyar
        </MenuItem>
      </Select>
    </FormControl>
  </Grid>

   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      //className={classes.select}
    >
      <InputLabel id="Subcaste-label">
        SubCaste
      </InputLabel>
      <Select
        labelId="Subcaste-label"
        value={expsubcaste}
        onChange={(e) =>
          setExpSubcaste(e.target.value)
        }
        label="Caste"
      >
        <MenuItem value="Sengunthar">
          Sengunthar
        </MenuItem>
      </Select>
    </FormControl>
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <TextField
      size="small"
      label="Gothram"
      value={expgothram}
      onChange={(e) =>
        setExpGothram(e.target.value)
      }
      fullWidth
      variant="standard"
      //className={classes.input}
      InputLabelProps={{
        classes: {
          //root: classes.label,
          //focused: classes.label,
        },
      }}
    />
  </Grid>
   <Grid item xs={12} md={6} xl={4}>
    {" "}
    <FormControl
      fullWidth
      variant="standard"
      size="small"
      //className={classes.select}
    >
      <InputLabel id="Star-label">State</InputLabel>
      <Select
        labelId="Star"
        value={expstar}
        onChange={(e) => setExpStar(e.target.value)}
        label="Star"
      >
        <MenuItem value="Aayilyam">
          Aayilyam
        </MenuItem>
      </Select>
    </FormControl>
  </Grid>
</Grid>
<Grid
  container
  item
  xs={12}
  md={6}
  justifyContent="flex-end"
  textAlign="right"
  ml="auto"
>
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="center"
    spacing={2}
  >
    <Button
      disabled={activeStep === 0}
      onClick={handleBack}
    >
      Back
    </Button>
    <Button
      variant="contained"
      sx={{ bgcolor: "#1A73E8" }}
      onClick={handleNext}
    >
      {activeStep === steps.length - 1
        ? "Finish"
        : "Continue"}
    </Button>
  </Stack>
</Grid>

{messageError && (
  <Stack sx={{ width: "100%" }} spacing={2}>
    <Alert severity="error">
      {/* <AlertTitle>Error</AlertTitle> */}
      {messageError}
      <strong>. Click Continue!</strong>
    </Alert>
  </Stack>
)}
</Box>