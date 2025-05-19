"use client";
import React from "react";
import {
  AppBar,
  Box,
  CssBaseline,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
  ListSubheader,
  Link,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const drawerWidth = 240;
const rightSidebarWidth = 240;

export default function MUIDocsPage() {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar>
        <Typography variant="h6">Docs Nav</Typography>
      </Toolbar>
      <Divider />
      <List>
        {["Introduction", "Installation", "Usage", "Customization"].map(
          (text) => (
            <ListItemButton key={text}>
              <ListItemText primary={text} />
            </ListItemButton>
          )
        )}
      </List>
    </div>
  );

  const rightSidebar = (
    <Box sx={{ px: 2, pt: 10 }}>
      <Typography variant="subtitle2" gutterBottom>
        On this page
      </Typography>
      <List
        dense
        disablePadding
        subheader={<ListSubheader disableGutters>Contents</ListSubheader>}
      >
        {["Introduction", "Installation", "Basic Example", "Customization"].map(
          (item) => (
            <ListItem key={item} disablePadding>
              <Link
                href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                underline="hover"
              >
                <ListItemText primary={item} />
              </Link>
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{
          width: { md: `calc(100% - ${drawerWidth + rightSidebarWidth}px)` },
          ml: { md: `${drawerWidth}px` },
          mr: { md: `${rightSidebarWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { md: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MUI Docs Page Example
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Left Drawer */}
      <Box
        component="nav"
        sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", md: "none" },
            "& .MuiDrawer-paper": { width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", md: "block" },
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>

      {/* Main Content */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: {
            xs: "100%",
            md: `calc(100% - ${drawerWidth + rightSidebarWidth}px)`,
          },
        }}
      >
        <Toolbar />
        <Typography variant="h4" gutterBottom id="introduction">
          Introduction
        </Typography>
        <Typography paragraph>
          This layout mimics the MUI Docs with a responsive drawer on the left
          and a TOC on the right. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Deserunt nemo doloremque asperiores? Minus
          reiciendis excepturi nesciunt voluptatibus aspernatur est eos
          doloribus nostrum perferendis quia! Vel similique id blanditiis
          cupiditate nam?
        </Typography>

        <Typography variant="h5" gutterBottom id="installation">
          Installation
        </Typography>
        <Typography paragraph>
          Use <code>npm install @mui/material</code> to get started. Lorem ipsum
          dolor sit amet consectetur, adipisicing elit. Doloremque facilis id
          nemo aut, aperiam, magnam quos quia incidunt labore aliquid assumenda!
          Rem laboriosam iste omnis quos ex voluptatibus repellendus doloribus.
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
          itaque vel quasi sunt. Amet exercitationem libero eveniet illum
          tenetur. Veniam inventore deserunt adipisci laudantium delectus cumque
          ducimus ad. Ex, impedit. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Rem, iure delectus modi, deleniti in autem
          dignissimos numquam officia temporibus vitae id quia nostrum ad
          assumenda quaerat blanditiis! Assumenda, doloremque molestias? Natus
          illo neque consequuntur quam, sed repellat quos qui commodi eligendi
          sint corporis omnis reprehenderit saepe molestiae, nisi at sunt
          provident! Repudiandae odio porro ut possimus harum modi quidem vel.
          Ipsam ratione debitis harum eaque expedita neque eum natus tenetur
          totam quo recusandae, maiores omnis praesentium. Reprehenderit, unde
          natus! Perspiciatis modi sed itaque dolorem ducimus adipisci iure rem
          natus unde. Fugiat, quo dolorem at quidem aliquam voluptates? Ad
          perferendis cumque alias porro dolor neque quidem corrupti. Beatae
          odio et fuga optio quas omnis, laboriosam iure porro mollitia. Totam,
          doloremque perspiciatis? Eum dolorem qui ab perferendis laudantium
          quaerat magni harum error, eos sequi dolor ipsam aut nulla sint maxime
          suscipit praesentium vel aspernatur, est eveniet! Nostrum soluta
          explicabo alias voluptatibus labore!
        </Typography>

        <Typography variant="h5" gutterBottom id="basic-example">
          Basic Example
        </Typography>
        <Typography paragraph>
          You can start by wrapping your layout with CssBaseline and a
          ThemeProvider. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Voluptates velit facere est vero. Harum cum ea voluptatem illum!
          Ratione consequatur magni cupiditate similique magnam minus a
          asperiores molestiae quia earum? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Quidem iste porro esse et! Asperiores
          magnam, nemo, doloribus, culpa nisi vel porro aut doloremque quasi
          fuga quidem? Necessitatibus vitae cupiditate illum? Repellendus eius
          officiis eaque recusandae! Laborum cumque beatae soluta voluptatum ea
          eligendi nostrum earum vitae! Error ex enim, ut fugit amet vel
          assumenda totam, odio repellat veritatis iusto, dolores facilis? Est
          id adipisci aut alias ut saepe, ex minima voluptatum aspernatur? Quia
          et at totam commodi nam quidem similique voluptatem soluta laudantium,
          ab incidunt ullam architecto deserunt! Fugiat, minima? Porro! Commodi
          possimus ex eos, delectus deleniti nobis. Aut reiciendis deleniti odit
          rem quam iusto rerum sit voluptates expedita? Autem voluptas ab quos
          eos excepturi! Nam asperiores itaque sed et officia. Architecto,
          corrupti. Id a fugit, quis, magni, ab repellendus odit modi aspernatur
          error iure nostrum ducimus? Enim aut obcaecati quam sequi suscipit
          voluptatibus nemo aliquam, similique iusto? Deleniti, eaque et. Vero
          adipisci accusantium fuga quisquam dolores est aliquam inventore.
          Numquam eum modi eaque nobis iure, totam excepturi maiores provident
          saepe quasi inventore reprehenderit cumque neque delectus illum
          itaque, in minus? Vel facilis esse repellendus repudiandae
          exercitationem consequuntur, nisi perspiciatis cum deserunt possimus,
          molestiae magni iusto inventore sapiente quas perferendis explicabo
          similique et voluptate cupiditate recusandae accusamus! Modi facilis
          et commodi. Corporis quas ducimus amet repellat. Quibusdam iusto vitae
          corrupti cum hic, odio fuga iste voluptas minima vero voluptatem,
          libero ea molestiae perferendis aut cupiditate reiciendis ad tempore.
          Doloribus, quas repellat. Maiores corporis magnam modi, sit fugit
          quisquam dolorem ea ut consequuntur sequi soluta labore. Expedita
          iusto voluptate natus optio rerum eum consequatur, quo eius laborum
          dolor quae excepturi unde corrupti. Veritatis, alias voluptatem
          quibusdam odio provident officiis fugiat ipsum iure, accusamus
          inventore rem aspernatur explicabo ea fuga laborum iusto vitae libero
          nisi a voluptatibus itaque cupiditate? Vitae autem aliquam pariatur?
          Quas laudantium mollitia suscipit, nisi officia aliquam facilis eos id
          dolorum cum consequatur laborum excepturi dolores libero tenetur
          blanditiis fuga eveniet itaque beatae. Sit esse neque tenetur error
          odit rem! Culpa, sunt corrupti delectus sit soluta non impedit,
          itaque, dignissimos voluptate magnam reiciendis ipsam illum id vel. Ex
          veritatis ea repudiandae molestias minima voluptatem animi. Eaque, eum
          quidem? Omnis, dolorum? Itaque fugit non id atque eaque voluptate
          nihil saepe sit iure, hic animi deleniti enim quia quisquam deserunt
          consequatur nulla assumenda repellendus amet accusamus molestias
          velit. Officiis, repellendus ad. Quia? Dignissimos autem delectus
          veniam dolorum deleniti nihil reprehenderit ea modi in obcaecati quae
          explicabo, deserunt quos iste accusamus doloremque commodi porro
          necessitatibus placeat. Non voluptates dicta tenetur deserunt facere
          aspernatur. Facere, magni autem quasi nihil nostrum reiciendis!
          Cupiditate esse ad architecto error placeat ut excepturi provident?
          Itaque sed qui consequatur, ea adipisci asperiores, quaerat porro
          delectus voluptas voluptatum quasi cupiditate! Facilis saepe ut, cum
          dolorem voluptate mollitia corporis incidunt atque eaque autem nulla
          quidem nostrum beatae distinctio rerum odit. Voluptates placeat quam
          pariatur perferendis fugit dignissimos ullam dolores voluptas quos!
          Commodi molestias facere quis? Temporibus, esse in. Atque perspiciatis
          impedit hic libero ullam ad eius, modi dolore porro possimus repellat
          ab animi, quasi, molestias quae aut numquam adipisci dicta aliquid.
          Voluptates odit aspernatur deleniti ullam adipisci repellendus sit
          nobis molestias debitis facilis hic dolorum cum, ea perspiciatis
          repellat corporis consequatur nesciunt! Sit dolorem unde quisquam
          veritatis autem maiores, natus reiciendis. Aspernatur aliquid minima
          nobis debitis optio iusto libero molestias est provident, autem
          corporis dolore ipsa enim quas itaque iure, architecto magni earum!
          Doloremque, similique iure quaerat magnam saepe repudiandae eius?
          Rerum nemo temporibus velit nisi atque sit quod officia consequuntur,
          illo repellat! Ad est ab numquam, tempore eius distinctio nulla
          deserunt dolore tenetur neque corporis, ducimus mollitia! Voluptatem,
          ex in. Eaque nisi, explicabo quos quo aspernatur incidunt velit. Quam
          repellendus repudiandae fuga porro voluptatum architecto cumque
          delectus corrupti aliquam odio dolore perspiciatis ut id quasi
          accusamus, labore, quaerat illo consequatur. Quaerat sapiente iste
          magnam aspernatur earum, cupiditate, quae quo nam repellat sint velit
          delectus fuga repudiandae magni ullam eum. Ratione beatae non illo,
          corporis iste quas maiores neque dolor doloribus. Numquam, incidunt.
          Est officia tempora eligendi, laboriosam praesentium, laudantium
          dolores mollitia magni, consectetur reiciendis a assumenda doloremque
          dolorem quidem? Voluptatem blanditiis odio excepturi eligendi sit quo
          mollitia! Consectetur, voluptatum ut? Eveniet quia aut obcaecati alias
          nulla voluptate incidunt, perspiciatis, dolor inventore et ut laborum
          distinctio facilis laudantium. Quam minima quasi autem labore, esse
          rem minus repellat, sapiente harum maxime recusandae. Nam nisi
          aliquam, porro aperiam labore, aliquid deserunt, perspiciatis odio
          nostrum voluptate hic facilis dicta dignissimos magni dolores fuga
          doloribus accusantium ducimus laudantium eius. Totam sint consequuntur
          illo dignissimos obcaecati. Quaerat iusto voluptatum corrupti, quasi
          id qui quae officiis fuga illo consectetur natus ut. Est, odio
          accusamus tenetur vel soluta nesciunt facilis porro totam quia
          officiis dolorem molestiae quos saepe. Similique cupiditate incidunt
          reiciendis, obcaecati deserunt nulla! Voluptatum neque reiciendis, ea,
          perspiciatis commodi nostrum omnis dolor, at nam hic expedita mollitia
          dicta voluptas deserunt molestias ex dolorem unde tempore laudantium!
          A iste quam perspiciatis assumenda labore, veritatis nulla earum
          maxime molestias, quos dignissimos blanditiis delectus sequi facilis
          rerum dolor facere debitis nesciunt corrupti cupiditate minus
          doloribus error magnam! Ad, similique. Suscipit asperiores aliquam
          molestiae eos adipisci numquam ad dolores fugiat natus temporibus
          possimus, ducimus ex enim sequi officia minima quia laudantium alias
          ratione. Saepe ratione placeat quis, esse excepturi officia!
          Voluptatum autem, esse ipsum vel officia laboriosam cumque saepe omnis
          natus sequi, incidunt asperiores distinctio suscipit maiores eius
          dolore aut error nisi dignissimos dicta, pariatur aliquam
          voluptatibus. Veritatis, inventore quo! Soluta vero molestiae earum
          quisquam iste velit, veritatis minus voluptates. Impedit eveniet quis
          libero. Expedita cum recusandae nulla nam aperiam voluptatum voluptas
          maiores delectus soluta, aliquam consectetur saepe velit in. Maxime
          vitae optio deleniti eveniet aspernatur perferendis laboriosam rem
          officia. Fugiat, deleniti! Quos veritatis repellendus dolores aperiam
          nihil ab inventore velit, voluptate alias. Ratione, amet labore sunt
          rem iure esse! Accusantium sequi ratione, perspiciatis architecto
          officia nesciunt vitae quisquam est voluptatum. Veritatis atque ipsum
          autem perferendis voluptatem minus, ratione ipsam numquam commodi,
          accusamus sed quae dicta praesentium doloribus doloremque voluptas?
          Aliquid corrupti asperiores, consectetur earum, est totam dolore natus
          ullam fuga magni ipsa quis quo impedit. Ipsam sit impedit eligendi
          consectetur ea! Pariatur ducimus corrupti aliquid eum nesciunt
          perspiciatis sunt! Adipisci necessitatibus commodi qui fugit repellat,
          expedita consectetur non soluta doloribus illum quisquam minima
          aliquid perspiciatis a enim fugiat pariatur dolorum, odit voluptatum.
          Consequatur nulla veritatis corrupti tempore, autem perferendis! Quasi
          perferendis provident saepe necessitatibus error mollitia debitis
          nesciunt ex? Aspernatur, non ut sapiente quia dolores minus nisi
          nesciunt, hic neque laborum molestiae nobis voluptatibus magnam
          repellat temporibus aliquam quibusdam? Blanditiis eligendi, nisi,
          accusamus deserunt distinctio culpa magnam sint voluptates odit,
          molestias perferendis beatae repellendus explicabo saepe! Fuga
          perferendis velit quam quo corporis voluptas, reprehenderit incidunt,
          cum omnis, error consequatur? Itaque maxime iste neque consectetur nam
          illo blanditiis asperiores ipsa ducimus accusantium, dolorum cum ex
          in. Assumenda deleniti vitae incidunt ipsum officia quia maxime libero
          a, quod id in hic! Necessitatibus accusantium non odit obcaecati
          similique sequi iusto cupiditate officiis suscipit, iure porro officia
          voluptatem, molestiae doloribus dolorum aliquam ad illo ratione
          dolorem neque animi nulla repellendus quia! Cumque, inventore. Dolores
          laborum earum accusantium nisi illo voluptates repellendus asperiores,
          unde est necessitatibus ea nihil iste eos veritatis consectetur quas
          fugiat eligendi reiciendis vero. Eligendi est soluta pariatur hic,
          eveniet expedita? Esse molestiae soluta obcaecati tempore fugit non.
          Magnam repellat saepe nostrum labore ullam, inventore temporibus illo
          provident in ut, at aut consequatur eligendi delectus facere velit.
          Qui corrupti eum maiores. Distinctio dolore aliquam quas, delectus
          tenetur ea eum voluptates error eius voluptas sed, minus, numquam
          doloribus ab quod non unde illum totam asperiores labore expedita
          accusantium officia! Quaerat, dolorem aliquid! Optio consequuntur quia
          eveniet, sint voluptas, consequatur recusandae laborum quasi
          asperiores dolores placeat ut, alias ea. Porro ipsum animi
          exercitationem pariatur, asperiores repudiandae? Nemo est possimus
          expedita! At, cupiditate et! Dolorem tenetur ipsam corrupti vero
          ducimus et maiores temporibus non cumque maxime velit necessitatibus
          repellendus optio aspernatur nisi atque in facilis, assumenda minima
          ullam voluptas voluptatem voluptatibus at? Ipsum, voluptatibus! Quas
          sapiente itaque commodi delectus mollitia ad quasi possimus id animi
          aperiam nostrum hic doloribus, natus excepturi ut incidunt iusto totam
          dolores, dignissimos cumque debitis illo exercitationem obcaecati.
          Officia, et! Temporibus, molestias accusamus. Eius sed ducimus cumque
          in, itaque libero, unde saepe consectetur officia magnam asperiores
          odit. Labore harum aperiam exercitationem eum? Qui fugiat blanditiis
          ad tenetur incidunt quo mollitia. Molestiae dolorum modi, minus
          asperiores officia porro explicabo! Quae illo placeat eum possimus id
          reprehenderit suscipit dignissimos saepe, praesentium, aliquam quasi
          beatae distinctio porro eos delectus soluta ea, officia atque! Fuga
          corporis magnam veritatis iure qui vel culpa perspiciatis ipsa
          impedit, facilis ratione minima, nemo provident sit placeat
          voluptatibus, et sapiente labore nesciunt ut harum expedita
          necessitatibus alias. Nemo, quas. Error perferendis delectus, itaque
          quidem repellendus laboriosam aspernatur saepe sint quibusdam culpa
          accusantium veritatis impedit neque blanditiis doloremque magni
          cupiditate, vero, nostrum atque. Asperiores dolore in, ullam eligendi
          ex beatae. Veritatis animi corporis voluptate quasi voluptatem,
          blanditiis ipsum ad perspiciatis quis, non maxime illum a ipsa quos?
          Asperiores consequuntur maxime voluptate, non exercitationem esse,
          iusto sit, fugit voluptates culpa ab?
        </Typography>

        <Typography variant="h5" gutterBottom id="customization">
          Customization
        </Typography>
        <Typography paragraph>
          Use the theme object to customize your MUI components globally.
        </Typography>
      </Box>

      {/* Right Sidebar */}
      <Box
        sx={{
          width: rightSidebarWidth,
          display: { xs: "none", md: "block" },
          position: "fixed",
          right: 0,
          top: 64,
          bottom: 0,
          borderLeft: "1px solid #ddd",
          backgroundColor: "#fafafa",
        }}
      >
        {rightSidebar}
      </Box>
    </Box>
  );
}
