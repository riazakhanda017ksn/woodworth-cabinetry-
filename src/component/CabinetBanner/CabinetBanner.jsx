import "./CabinetBanner.scss";
import { all__products, canadian, classic, modernData, Transitional, vanity } from "../../Data/ProductData";
import { Link } from "react-router-dom";
import 'react-tabs/style/react-tabs.css';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useState } from "react";


const CabinetBanner = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
  setValue(newValue);
 };
 


  return (
    <div className="CabinetBanner padding">
      {/*  */}
      <div className="container">
        <div className="quality-caption">
        
          <div className="text mb-4">
            <h3 style={{marginBottom:"50px"}}>
              <small>all door style</small>
            </h3>




            <Box sx={{ width: '100%' }}>
  <Tabs
    value={value}
    onChange={handleChange}
    indicatorColor="primary"
    textColor="primary"
    centered
  >
    <Tab label="All" />
    <Tab label="Transitional" />
    <Tab label="Classic" />
    <Tab label="Vanity" />
    <Tab label="Modern" />
    <Tab label="Canada Region Only" />

  </Tabs>
  <Typography component="div" role="tabpanel" hidden={value !== 0}>
  <div className="row mt-5">
          {all__products && all__products.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={data.class + " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
          {/*  */}
        </div>
  </Typography>
  <Typography component="div" role="tabpanel" hidden={value !== 1}>
  <div className="row mt-5">
          { Transitional && Transitional.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={data.class + " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
  </Typography>
  <Typography component="div" role="tabpanel" hidden={value !== 2}>
  
  <div className=" mt-5">
          {classic && classic.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position add-new-widths"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={data.class + " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
  </Typography>
  <Typography component="div" role="tabpanel" hidden={value !== 3}>
  <div className="row mt-5">
          {vanity && vanity.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={data.class + " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
  </Typography>
  <Typography component="div" role="tabpanel" hidden={value !== 4}>
  <div className="row mt-5">
          { modernData && modernData.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={ " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
  </Typography>
  <Typography component="div" role="tabpanel" hidden={value !== 5}>
  <div className="row mt-5">
          {canadian &&  canadian.map((data) => {
            return (
              <div
                key={data.id}
                className="col-lg-3 bottom-position"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-easing="ease-in-out"
              >
                <Link to={`${data.id}`} className="link___">
                  <div className={data.class + " container-background text-center"}>
                    <div
                      className="add-bg-backside"
                    >
                      <img className={data.class} src={data.image} alt="" />
                    </div>
                    <div className="add-more-gray-bg"></div>
                    <h6 className="text-center custom-color-text">{data.name}</h6>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
  </Typography>
</Box>

      {/* <Tabs>
    <TabList>
      <Tab>All</Tab>
      <Tab>Transitional</Tab>
      <Tab>Classic</Tab>
      <Tab>Vanity</Tab>
      <Tab>Modern</Tab>
      <Tab>canada region only</Tab>
    </TabList>

    <TabPanel> */}
 
{/* 
    </TabPanel>
    <TabPanel> */}
   
    {/* </TabPanel>
    <TabPanel> */}
   
    {/* </TabPanel>z
   <TabPanel> */}
 
  {/* </TabPanel>

  <TabPanel> */}

  {/* </TabPanel>

  <TabPanel>

  </TabPanel> */}
 
  {/* </Tabs> */}



          </div>
        </div>
        {/* row */}
        
       {/*  */}
       {/* <div>
      <h2>Data Display</h2>
      <div className="name-buttons">
        {data.map((item) => (
          <button key={item.name} onClick={() => handleClick(item.name)}>
            {item.name}
          </button>
        ))}
      </div>
      {selectedName === "All" ? (
        <div>
          {data.map((item) => (
            <div key={item.name}>
              <h4>{item.name}</h4>
              <p>{item.info}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <h3>{selectedName}</h3>
          <p>{data.find((item) => item.name === selectedName).info}</p>
        </div>
      )}
    </div> */}
         

       {/*  */}
      </div>


    </div>
  );
};

export default CabinetBanner;
