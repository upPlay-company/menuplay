import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


const tiers = [
  {
    title: 'Mensal',
    price: '55',
    description: [
      'Assinatura de 30 dias',
      'Pedidos Ilimitados', 
      'Itens Ilimitados', 
      'Fotos nos Itens', 
      'Adicione Logo Marca', 
      'Adicione Plano de Fundo', 
      'Página de Contato', 
      'Imagens nos Itens', 
      'Cupom de Desconto'
    ],
    buttonText: 'ASSINE',
    buttonVariant: 'outlined',
  },
  {
    title: 'Semestral',
    subheader: 'Mais Popular',
    price: '280',
    description: [
      'Assinatura de 6 meses',
      'Pedidos Ilimitados',
      'Itens Ilimitados',
      'Fotos nos Itens',
      'Adicione Logo Marca',
      'Adicione Plano de Fundo',
      'Página de Contato',
      'Imagens nos Itens',
      'Cupom de Desconto',
    ],
    buttonText: 'ASSINE',
    buttonVariant: 'contained',
  },
  {
    title: 'Anual',
    price: '480',
    description: [
      'Assinatura de 12 meses',
      'Pedidos Ilimitados',
      'Itens Ilimitados',
      'Fotos nos Itens',
      'Adicione Logo Marca',
      'Adicione Plano de Fundo',
      'Página de Contato',
      'Imagens nos Itens',
      'Cupom de Desconto',
    ],
    buttonText: 'ASSINE',
    buttonVariant: 'outlined',
  },
];


const Planos = () => {
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <Container maxWidth="md" component="main">
        <h2 id="planos" className="text-center">PLANOS</h2>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card className={classes.cards}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button href="/checkout" fullWidth variant={tier.buttonVariant} color="primary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default Planos;


const useStyles = makeStyles((theme) => ({
  '@global': {ul: {margin: 0, padding: 0, listStyle: 'none',}, },
  toolbar: {flexWrap: 'wrap', },
  toolbarTitle: {flexGrow: 1, },
  link: {margin: theme.spacing(1, 1.5), },
  cards: {marginTop: theme.spacing(10), marginBottom: theme.spacing(20), },
  cardHeader: {backgroundColor: theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700], },
  cardPricing: {display: 'flex', justifyContent: 'center', alignItems: 'baseline', marginBottom: theme.spacing(2), },
}));